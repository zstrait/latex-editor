import Switch from "react-switch";

function SettingItem({ name, description, checked, onChange }) {
    return (
        <>
            <div className="setting-item">
                <div className="setting-container">
                    <div className="setting-name">{name}</div>
                    <div className="setting-desc">{description}</div>
                </div>
                <div>
                    <Switch
                        checked={checked}
                        onColor={'#576E86'}
                        onHandleColor={'#9CC8F5'}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={onChange}
                    />
                </div>
            </div>
        </>
    );
}

export default SettingItem;