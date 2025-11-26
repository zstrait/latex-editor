import ReferenceItem from "./ReferenceItem";

export default function ReferenceSection({ sectionId, section, items }) {
    if (!items) return null;
    const itemsFlattened = items.flatMap(item => item.symbols);

    let sliceIndex = Math.ceil(itemsFlattened.length / 2);
    let leftItems = itemsFlattened.slice(0, sliceIndex);
    let rightItems = itemsFlattened.slice(sliceIndex);

    return (
        <>
            <div className="reference-section">
                <div id={sectionId} className="section-title">{section}</div>
                <div className="section-content">
                    <div className="reference-items-container left-references">
                        {leftItems.map((item, index) => (
                            <ReferenceItem
                                key={index}
                                icon={item.icon}
                                code={item.code}
                            />
                        ))}
                    </div>
                    <div className="reference-items-container right-references">
                        {rightItems.map((item, index) => (
                            <ReferenceItem
                                key={index}
                                icon={item.icon}
                                code={item.code}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}