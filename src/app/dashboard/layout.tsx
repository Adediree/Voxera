import Sidebar from "@/components/ui/menu/Sidebar";
import Header from "@/components/ui/menu/Header";

const DashboardLayout = ({
                             children,
                             ...props
                         }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div className={""}
             style={{
                 display: "flex",
                 position: "relative",
                 justifyContent: "flex-start",
                 height: "100vh",
                 overflow: "hidden"
             }} {...props}>
            <Sidebar/>
            <main style={{
                flex: 1,
                height: "100%",
                backgroundColor: "var(--gray--1)",
                position: "relative",
            }}>
                <Header type={"dashboard"}/>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout
