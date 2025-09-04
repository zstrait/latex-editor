import SettingItem from "./SettingItem";

function Settings({
    isLiveRendering,
    onLiveRenderingToggle,
    isSyntaxHighlighting,
    onSyntaxHighlightingToggle,
    isAutoNewline,
    onAutoNewlineToggle
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
                        name={'Automatic \n Line Breaks'}
                        description={'Automatically insert new line breaks (\\\\) when Enter is pressed.'}
                        checked={isAutoNewline}
                        onChange={onAutoNewlineToggle}
                    />
                    <SettingItem
                        name={'Syntax \n Highlighting'}
                        checked={isSyntaxHighlighting}
                        onChange={onSyntaxHighlightingToggle}
                    />
                </div>
            </div>
        </>
    );
}

export default Settings;