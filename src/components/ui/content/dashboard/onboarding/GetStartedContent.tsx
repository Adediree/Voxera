import "@/components/ui/container/container.css"
import BaseButton from "@/components/ui/button/BaseButton";
import BaseAccordion, {BaseAccordionProps} from "@/components/ui/accordion/BaseAccordion";
import useModal from "@/utilities/hooks/useModal";
import BaseContainer from "@/components/ui/container/BaseContainer";
import TodoList, {TodoListProps} from "@/components/custom/TodoList";
import {ModalEnum} from "@/utilities/enums/modalEnum";

const GetStartedContent = () => {
    // const authState = useSelector((state: RootState) => state.auth);
    // const directorState = useSelector((state: RootState) => state.director);
    const contactUsSupportModal = useModal(ModalEnum.CONTACT_US_SUPPORT_MODAL)


    const newOrganisationTodoItems: TodoListProps["todoItems"] = [
        {
            itemName: "Tell us more about your business",
            isCompleted: true,

        },
        {
            itemName: "Provide business registration information",
            isCompleted: true,

        },
        {
            itemName: "Add business representative",
            isCompleted: false,

        },
        {
            itemName: "Add Transfer Pin",
            isCompleted: false,

        },
        // {itemName: "Merchant Service Agreement", isCompleted: false,},
    ]
    const rubiesFaqItems: BaseAccordionProps["accordionItems"] = [
        {
            title: "What is BaaS in banking?",
            message: "Bank-as-a-Service (BaaS) enables financial institutions and fintech companies to offer banking services like payments, lending, account management, and compliance through APIs, without needing to build a full banking infrastructure."
        },
        {
            title: "Who can benefit from banking BaaS solutions?",
            message: "Fintech startups, digital banks, e-commerce platforms, loan providers, and businesses looking to embed financial services into their products can all benefit from BaaS."
        },
        {
            title: "How is BaaS priced?",
            message: "Pricing is usually based on usage, including API requests, storage, bandwidth, and active users. We offer plans and scalable pricing models in line with your requests."
        },
        {
            title: "What BaaS services does Rubies offer?",
            message: "\t-\tPayment Services\n" +
                "\t-\tKYC Services\n" +
                "\t-\tVirtual Accounts\n" +
                "\t-\tWallet Services\n" +
                "\t-\tCollection Services\n" +
                "\t-\tVerve Card Co-Branding\n"
        },
        {
            title: "Do you offer customization?",
            message: "In terms of customisation, we are that one stop shop. We are not hardwired; we are very flexible in that area. "
        },
    ]


    return (<div>
        <BaseContainer style={{display: 'flex', flexDirection: "column", gap: "1.5rem"}}>
            <div>
                <p className={"title"}>Activate Your Business</p>
                <p className={"subtitle label"} style={{maxWidth: "800px"}}>Based on your business type, you will be
                    required to submit the
                    documents below during the business activation process.
                </p>
            </div>
            <main className={"dashboard-get-started-container"}>
                <div style={{flex: 1.5}}>
                    {/*<BaseAccordion expandMultiple={true}*/}
                    {/*               accordionItems={[*/}
                    {/*                   {title: "What is Rubies", message: "The best banking platform ever"},*/}
                    {/*                   {title: "What is not Rubies", message: "The best banking platform ever"},*/}
                    {/*                   {title: "What is Rubies", message: "The best banking platform ever"},*/}
                    {/*               ]}/>*/}

                    <TodoList todoItems={newOrganisationTodoItems} todoListName={"Finish setting up"}/>
                    {/* Finish Setup Card */}
                    {/* Learn how Rubies works Card*/}
                </div>
                <div style={{flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem"}}>
                    <div style={{
                        border: "1px solid #0a0f2914",
                        borderRadius: ".55em",
                        padding: "1.5em",
                        backgroundColor: "#0b0c0e",
                        gap: "1.5em",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{display: "flex", flexDirection: "column", gap: ".5em"}}>
                            <p style={{color: "white", fontWeight: 600}}>Got Questions? Find answers fast!</p>
                            <p className={"subtitle"} style={{color: "#ffffff75"}}>Can’t find answers to questions you
                                have? Our support team
                                is available to help you.</p>
                        </div>
                        <BaseButton text={"Get Support"} variant={"secondary"} size={"x-small"} onClick={() => {
                            contactUsSupportModal.open()
                        }}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: ".5rem"}}>
                        <p style={{fontWeight: 600}}>FAQs</p>
                        <BaseAccordion expandMultiple={false} expandByDefault={false}
                                       accordionItems={rubiesFaqItems}/>
                    </div>
                </div>
            </main>
        </BaseContainer>
    </div>)
}
export default GetStartedContent
