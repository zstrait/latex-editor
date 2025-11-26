function ReferenceToC() {
    return (
        <>
            <div className="table-of-contents">
                <div className="toc-header">Contents</div>
                <div className="section-link-container">
                    <a href="#operators-section" className="section-link">Operators</a>
                    <a href="#logic-section" className="section-link">Logic & Sets</a>
                    <a href="#greek-section" className="section-link">Greek</a>
                    <a href="#structures-section" className="section-link">Structures</a>
                    {/* <a href="#formatting-section" className="section-link">Formatting</a> */}
                    <a href="#other-section" className="section-link">Other</a>
                </div>
            </div>
        </>
    )
}

export default ReferenceToC;