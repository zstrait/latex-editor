import SettingItem from "./SettingItem";

function Settings({
    isLiveRendering,
    onLiveRenderingToggle,
    isSyntaxHighlighting,
    onSyntaxHighlightingToggle
}) {
    return (
        <>
            <div className="settings-panel panel-content">
                <div className="panel-title">Settings</div>
                <div className="settings">
                    <SettingItem
                        name={'Live Rendering'}
                        description={'Turning off will add\na manual compile button.'}
                        checked={isLiveRendering}
                        onChange={onLiveRenderingToggle}
                    />
                    <SettingItem
                        name={'Syntax \n Highlighting'}
                        checked={isSyntaxHighlighting}
                        onChange={onSyntaxHighlightingToggle}
                    />
                    <SettingItem
                        name={'Automatic \n Line Breaks'}
                        description={'Automatically insert new line breaks (\\\\) when Enter is pressed.'}
                    // checked={}
                    // onChange={}
                    />
                </div>
            </div>
        </>
    );
}

export default Settings;