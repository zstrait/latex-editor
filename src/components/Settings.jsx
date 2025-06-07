import SettingItem from "./SettingItem";

function Settings({ isLiveRendering, onToggleLiveRendering }) {
    return (
        <>
            <div className="settings-panel panel-content">
                <div className="panel-title">Settings</div>
                <div className="settings">
                    <SettingItem
                        name={'Live Rendering'}
                        description={'Turning off will add a manual compile button.'}
                        checked={isLiveRendering}
                        onChange={onToggleLiveRendering}
                    />
                </div>
            </div>
        </>
    );
}

export default Settings;