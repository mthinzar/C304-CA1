const styles = `
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, sans-serif; color: #3a2a1e; }
  h2 { text-align: center; color: #5c3317; font-size: 1.8rem; margin: 0 0 1.5rem; }
  .btn { background: #c47a35; color: #fff; border: none; border-radius: 8px;
    padding: 0.6rem 1.2rem; cursor: pointer; font-weight: bold; }
  .btn:hover { background: #5c3317; }
  .btn-large { padding: 0.9rem 2rem; font-size: 1.1rem; }

  .navbar { display: flex; justify-content: space-between; align-items: center;
    padding: 1rem 1.5rem; background: #fff; border-bottom: 1px solid #eadfd3; }
  .logo { font-weight: bold; font-size: 1.3rem; color: #5c3317; }
  .nav-link { background: none; border: none; padding: 0.5rem 0.9rem; cursor: pointer;
    font-size: 1rem; color: #3a2a1e; border-radius: 6px; }
  .nav-link.active { background: #f3e3d3; color: #5c3317; font-weight: bold; }

  .hero { background: #fdf6ee; text-align: center; padding: 5rem 1.5rem; }
  .hero h1 { font-size: 2.6rem; color: #5c3317; margin: 0 0 0.75rem; }
  .hero p { font-size: 1.15rem; max-width: 560px; margin: 0 auto 1.75rem; }

  .intro { padding: 4rem 1.5rem; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
  .highlight { border: 1px solid #eadfd3; border-radius: 12px; padding: 1.5rem; text-align: center; }
  .highlight-icon { font-size: 2.2rem; }

  .featured { background: #fdf6ee; padding: 4rem 1.5rem; }
  .filter-tabs { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
  .tab { background: #fff; border: 1px solid #c47a35; color: #c47a35;
    border-radius: 999px; padding: 0.45rem 1.1rem; cursor: pointer; }
  .tab.active { background: #c47a35; color: #fff; }
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.5rem; max-width: 1100px; margin: 0 auto; }
  .empty-state { text-align: center; font-style: italic; color: #8a7a6c; }

  .product-card { background: #fff; border-radius: 12px; overflow: hidden; padding-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; flex-direction: column; gap: 0.4rem; }
  .product-card > *:not(img) { margin-left: 1rem; margin-right: 1rem; }
  .product-img { width: 100%; height: 180px; object-fit: cover; background: #eadfd3; }
  .product-card h3 { margin-top: 0; margin-bottom: 0; font-size: 1.05rem; }
  .category-badge { align-self: flex-start; background: #f3e3d3; color: #5c3317;
    font-size: 0.75rem; padding: 0.15rem 0.6rem; border-radius: 999px; }
  .product-desc { font-size: 0.9rem; color: #6b5a4c; margin-top: 0; margin-bottom: 0; flex: 1; }
  .product-price { font-weight: bold; color: #5c3317; margin-top: 0; margin-bottom: 0; }

  .footer { background: #5c3317; color: #fff; padding: 3rem 1.5rem;
    display: flex; flex-wrap: wrap; justify-content: space-between; gap: 2rem; }
  .footer-info p { margin: 0.25rem 0; }
  .newsletter { display: flex; flex-direction: column; gap: 0.5rem; max-width: 380px; width: 100%; }
  .newsletter input { padding: 0.6rem; border-radius: 8px; border: none; }
  .message { margin: 0; font-size: 0.9rem; padding: 0.4rem 0.6rem; border-radius: 6px; }
  .message.error { background: #fde2e2; color: #a12020; }
  .message.success { background: #e2f6e6; color: #1d6b31; }

  .placeholder { padding: 4rem 1.5rem; text-align: center; }

  @media (max-width: 600px) { .hero h1 { font-size: 2rem; } }
`;

export default styles;