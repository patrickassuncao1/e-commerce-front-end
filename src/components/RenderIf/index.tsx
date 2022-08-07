
const RenderIf = ({ children, isTrue }: { children: JSX.Element, isTrue: boolean }) => {
    return isTrue ? children : null;
}

export default RenderIf;