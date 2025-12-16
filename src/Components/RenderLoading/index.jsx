import { FaSpinner } from "react-icons/fa"
import { ContainerCenter } from "../../Pages/styles"

export default function RenderLoading({ loading, children }) {
    if (loading) return <ContainerCenter>
        <FaSpinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
        </FaSpinner>
    </ContainerCenter>

    return <>{children}</>
}