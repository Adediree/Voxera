// "use client"
import BaseCreateOrUpdateForm, {
  BaseCreateOrUpdateFormProps,
} from "@/components/ui/form/BaseCreateOrUpdateForm";
import {
  CreateLetterOfCreditRequest,
  createLetterOfCreditRequestInit,
} from "@/models/requests/letterOfCredit/createLetterOfCreditRequest";
import {
  UpdateLetterOfCreditRequest,
  updateLetterOfCreditRequestInit,
} from "@/models/requests/letterOfCredit/updateLetterOfCreditRequest";
import { BaseAccordion, BaseAccordionProps } from "qucoon-components";
import {
  useCreateLetterOfCreditMutation,
  useUpdateLetterOfCreditMutation,
} from "@/services/letterOfCreditService";
import { LetterOfCreditValidation } from "@/models/validations/letterOfCreditValidation";
import { CreateLetterOfCreditResponse } from "@/models/responses/letterOfCredit/createLetterOfCreditResponse";
import ImportLcDetailsSection from "@/components/content/dashboard/issue/importLetterOfCredit/sections/importLcDetailsSection";
import PartyDetailsSection from "@/components/content/dashboard/issue/importLetterOfCredit/sections/partyDetailsSection";
import AmountDetailsSection from "@/components/content/dashboard/issue/importLetterOfCredit/sections/amountDetailsSection";
import PartyListSection from "@/components/content/dashboard/issue/importLetterOfCredit/sections/partyListSection";

export type LetterOfCreditFormRequest =
  | CreateLetterOfCreditRequest
  | UpdateLetterOfCreditRequest;

export type CreateOrUpdateLetterOfCreditFormProps = Pick<
  BaseCreateOrUpdateFormProps<
    LetterOfCreditFormRequest,
    CreateLetterOfCreditRequest,
    UpdateLetterOfCreditRequest,
    CreateLetterOfCreditResponse,
    CreateLetterOfCreditResponse
  >,
  "onSuccessfulSubmission" | "isUpdate" | "submitBtnProps"
> & { initialValues?: LetterOfCreditFormRequest };

const CreateOrUpdateLetterOfCreditForm = ({
  initialValues,
  onSuccessfulSubmission,
  submitBtnProps,
  isUpdate = false,
}: CreateOrUpdateLetterOfCreditFormProps) => {
  const [createLetterOfCredit] = useCreateLetterOfCreditMutation();
  const [updateLetterOfCredit] = useUpdateLetterOfCreditMutation();

  const baseCreateOrUpdateFormConfig: BaseCreateOrUpdateFormProps<
    LetterOfCreditFormRequest,
    CreateLetterOfCreditRequest,
    UpdateLetterOfCreditRequest,
    CreateLetterOfCreditResponse,
    CreateLetterOfCreditResponse
  > = {
    createAction: async (request) =>
      await createLetterOfCredit(request).unwrap(),
    updateAction: async (request) =>
      await updateLetterOfCredit(request).unwrap(), // change to update when endpoint is available
    initialValues:
      initialValues ||
      (isUpdate
        ? updateLetterOfCreditRequestInit
        : createLetterOfCreditRequestInit),
    validationSchema: isUpdate
      ? LetterOfCreditValidation.updateLetterOfCreditForm
      : LetterOfCreditValidation.createLetterOfCreditForm,
  };

  const renderFields = (formik: any) => {
    const importLetterOfCreditInputAccordionItems: BaseAccordionProps["items"] =
      [
        {
          title: "Import LC details",
          customContent: <ImportLcDetailsSection formik={formik} />,
        },
        {
          title: "Party Details",
          customContent: <PartyDetailsSection formik={formik} />,
        },
        {
          title: "Amount Details",
          customContent: <AmountDetailsSection formik={formik} />,
        },
        {
          title: "Party List",
          customContent: <PartyListSection formik={formik} />,
        },
      ];

    return (
      <BaseAccordion
        items={importLetterOfCreditInputAccordionItems}
        defaultConfig={{
          iconPosition: "end",
          headerStyle: {
            backgroundColor: "lightgray",
            padding: "1em",
          },
        }}
        expandAllByDefault={true}
        expandMultiple={true}
      />
    );
  };

  return (
    <BaseCreateOrUpdateForm
      submitBtnProps={submitBtnProps}
      {...baseCreateOrUpdateFormConfig}
      onSuccessfulSubmission={onSuccessfulSubmission}
      isUpdate={isUpdate}
      renderFields={renderFields}
    />
  );
};

export default CreateOrUpdateLetterOfCreditForm;
