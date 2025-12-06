import { Spinner } from "react-bootstrap"
import { ContainerCenter } from "../../Pages/styles"

export default function RenderLoading({ loading, children }) {
    if (loading) return <ContainerCenter>
        <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </ContainerCenter>

    return <>{children}</>
}