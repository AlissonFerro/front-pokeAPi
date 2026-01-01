import { FaSpinner } from "react-icons/fa"
import { ContainerCenter } from "../../Pages/styles"
import type React from "react"

export default function RenderLoading({ loading, children }: { loading: boolean, children: React.PropsWithChildren }) {
    if (loading) return <ContainerCenter>
        <FaSpinner role="status">
            <span className="visually-hidden">Loading...</span>
        </FaSpinner>
    </ContainerCenter>

    return <>{children}</>
}