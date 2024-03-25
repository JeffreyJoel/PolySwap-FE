export default function NavBar() {
    return (
        <div className="container py-4 flex justify-between items-center">
            <div className="text-lg md:text-xl font-semibold uppercase">PolySwap</div>
            <div className="gap-4 items-center">
                <w3m-button />
            </div>
        </div>
    );
}
