"use client";

import { BaseDataGrid, BaseDataGridProps, useModal } from "qucoon-components";
import {
  useDeleteLetterOfCreditByLetterOfCreditIdMutation,
  useLazyReadLetterOfCreditQuery,
  useLazySearchLetterOfCreditQuery,
} from "@/services/letterOfCreditService";
import { ModalEnum } from "@/utilities/enums/modalEnum";
import { SearchLetterOfCreditRequest } from "@/models/requests/letterOfCredit/searchLetterOfCreditRequest";
import { ReadLetterOfCreditResponse } from "@/models/responses/letterOfCredit/readLetterOfCreditResponse";
import BaseToast from "@/components/ui/toast/BaseToast";
import { createLetterOfCreditRequestInit } from "@/models/requests/letterOfCredit/createLetterOfCreditRequest";
import { BaseUtil } from "@/utilities/baseUtil";

const AllLetterOfCreditContent = () => {
  const [readLetterOfCredit] = useLazyReadLetterOfCreditQuery();
  const [searchLetterOfCredit] = useLazySearchLetterOfCreditQuery();
  const [deleteLetterOfCreditByLetterOfCreditId] =
    useDeleteLetterOfCreditByLetterOfCreditIdMutation();
  const createOrUpdateLetterOfCreditModal = useModal(
    ModalEnum.CreateOrUpdateLetterOfCreditModal
  );
  const viewModal = useModal(ModalEnum.ViewTableRowDetailModal);
  const confirmationModal = useModal(ModalEnum.ConfirmationModal);

  const handleRefresh: BaseDataGridProps["fetchRows"] = async (params) => {
    BaseUtil.logger("🔄 handleRefresh called with params:", params);
    const response = (await readLetterOfCredit()).data;
    BaseUtil.logger("handleRefresh response: ", response);
    return { data: response?.data ?? [] };
  };
  const handleSearch: BaseDataGridProps["fetchRows"] = async (params) => {
    const request: SearchLetterOfCreditRequest = {
      search: params?.search ?? "",
      sortBy: params?.sortBy ?? "",
      sortDir: params?.sortDir ?? "",
      pageNumber: params?.pageNumber ?? "",
      pageSize: params?.pageSize ?? "",
      ...params?.filters,
    };
    const response = (await searchLetterOfCredit(request)).data;
    BaseUtil.logger("handleSearch response: ", response);
    return { data: response?.data ?? [] };
  };
  const handleDelete = async (data: ReadLetterOfCreditResponse["data"][0]) => {
    await confirmationModal.open({
      variant: "warning",
      title: "Delete Letter Of Credit",
      subtitle: `Are you sure you want to delete Letter Of Credit with id: ${data?.letterOfCreditId} `,
      startBtnProps: {
        text: "Cancel",
        onClick: () => {
          confirmationModal.close();
        },
      },
      endBtnProps: {
        text: "Delete",
        onClick: async () => {
          await deleteLetterOfCreditByLetterOfCreditId({
            letterOfCreditId: data?.letterOfCreditId,
          }).unwrap();
          BaseToast({ type: "success", message: "Completed Successfully" });
          confirmationModal.close();
        },
      },
    });
  };

  const handleEdit = async (data: ReadLetterOfCreditResponse["data"][0]) => {
    await createOrUpdateLetterOfCreditModal.open({ data, isUpdate: true });
  };

  const handleCreateLetterOfCredit = async () => {
    await createOrUpdateLetterOfCreditModal.open({
      data: {
        ...createLetterOfCreditRequestInit,
        // "locReference": formik?.values?.locReference
      },
    });
  };

  const columns: BaseDataGridProps["columns"] = [
    {
      field: "letterOfCreditApplicant",
    },
    {
      field: "letterOfCreditConfirmation",
    },
    {
      field: "letterOfCreditProductType",
    },
    {
      field: "locReference",
    },
  ];

  const colActions: BaseDataGridProps["colActions"] = {
    delete: {
      onClick: handleDelete,
    },
    edit: {
      onClick: handleEdit,
    },
    view: {
      onClick: async (data: ReadLetterOfCreditResponse["data"][0]) => {
        viewModal.open({
          data: data,
          editBtnProps: {
            onClick: () => handleEdit(data),
          },
          deleteBtnProps: {
            onClick: () => handleDelete(data),
          },
        });
      },
    },
  };

  return (
    <BaseDataGrid
      title={"Letter Of Credit"}
      uniqueRowId={"letterOfCreditId"}
      fetchRows={handleRefresh}
      // rows={data?.data ?? []}
      defaultPaginationConfig={{ isPageZeroIndexed: true }}
      defaultHeaderProps={{ onCreateClick: handleCreateLetterOfCredit }}
      columns={columns}
      autogenerateColumns={false}
      colActions={colActions}
      serverSideOperationsConfig={{
        filter: {
          fetchRows: handleSearch,
        },
      }}
    />
  );
};

export default AllLetterOfCreditContent;
