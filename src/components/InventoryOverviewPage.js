function InventoryOverviewPage({products}) {
    return(
        <div>
            <h1>Inventory Overview</h1>
            <p>We are storing {products.length} products. </p>
        </div>
    );
}

export default InventoryOverviewPage;