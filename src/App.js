import React from 'react';
import './App.css'
import icon from './icon.png';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            property: "value"
        }
    }

    render() {
        return (
            <div id="main">
                <div>
                    <h1 style={{textAlign: "center"}}>Add gabebot to your Discord server!</h1>
                </div>
                <img id="icon" src={icon} height="120px" alt="icon"/>
                    <a
                        href='https://discord.com/api/oauth2/authorize?client_id=843650184206483496&permissions=3072&redirect_uri=https%3A%2F%2Fnelsong1997.github.io%2Fgabebot%2F&scope=bot'
                    ><button id="add-link">Add gabebot</button></a>
                <div>
                    <div id="about">
                        <p>
                            <strong>gabebot</strong> is a simple discord bot that has a few basic capabilities. It does have one relatively unique 
                            feature: <strong>Voice Logging.</strong>
                        </p>
                        <p>
                            gabebot can keep track of when people join, leave, and switch between the voice channels of your server. This lets 
                            you quickly solve the mysteries of "who just left the voice call?" or "who keeps joining and then leaving right away?"
                        </p>
                        <p>
                            Below is a comprehensive list of the currently supported commands. If the bot appears offline, it will not function. This 
                            may happen sometimes since it is hosted on my personal raspberry pi.
                        </p>
                        <p>
                            This bot is a work in progress so there may be unintended behavior and bugs involved!
                        </p>
                    </div>
                </div>
                <div id="help">
                    <div>
                        <p> 
                            note: <div>!</div> is the default prefix for commands, but this can be changed by using the <div>!setprefix</div> command.
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!help</div>
                        </p>
                        <p>
                            Provides you with the help text for the bot.
                        </p>
                    </div>
                    <div>
                    <p>
                            <div>!(un)setcommandchannel</div>
                        </p>
                        <p>
                            Use this command to set/unset which channel you will use to send commands to the bot. Type this command in the desired channel
                            for it to work. When this is unset, commands will work everywhere.
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!logmode [mode]</div>
                        </p>
                        <p>
                            Voice logging mode has three modes:
                        </p>
                        <p>
                            <div>off</div>: Voice logging disabled.
                        </p>
                        <p>
                            <div>live</div>: The bot will post a message in a designated channel each time a change occurs. Use <div>!setlogchannel</div> in
                            the desired channel to designate this channel.
                        </p>
                        <p>
                            <div>passive</div>: Voice logging enabled, but the <div>!log</div> commands have to be used to view them.
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!setlogchannel</div>
                        </p>
                        <p>
                            When the <div>logmode</div> (see above) is set to <div>live</div>, sets where logs will be recorded.
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!log [type] [range] [id]</div>
                        </p>
                        <p>
                            ex.: <div>!log all</div>; <div>!log user 2-4 752210634858561646</div>
                        </p>
                        <p>
                            View logs for when people join, leave and move between voice channels
                        </p>
                        <p>
                            <div>[type]</div>: can be <div>all</div>, <div>peruser</div>, <div>user</div>, or <div>length</div>. <div>all</div> shows 
                            all logs within the range. <div>peruser</div> only
                            shows 1 log per distinct user. i.e. the last action each user performed. <div>user</div> shows
                            logs for a specific user, determined by the user <div>[id]</div> provided at the end of the command.
                            You can copy people's id's by enabling developer mode in advanced settings. <div>length</div> shows how many logs there are currently.
                        </p>
                        <p>
                            <div>[range]</div> (defaults to 5): If one number <em>x</em> is provided for the range, the most recent <em>x</em> logs will display.
                            Otherwise a range of numbers or time specification can be used. Examples: <div>5-10</div>, <div>14:00-15:00</div>, <div>before5:00pm</div>, <div>after1:23am</div>
                        </p>
                        <p>
                            <div>[id]</div>: Specifies user id when using <div>[type] = user</div>. You can copy people's id's by enabling developer mode in advanced settings.
                        </p>
                        <p>
                            <strong>Logs older than 24 hrs are deleted whenever voice state changes or a</strong> <div>!log</div> <strong>command is used.</strong>
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!flip </div>
                        </p>
                        <p>
                            Flip a coin. returns "heads" or "tails."
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!roll [#sides] [#sides] [#sides]...</div>
                        </p>
                        <p>
                            ex.: <div>!roll 6 6</div>
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!setprefix [prefix]</div>
                        </p>
                        <p>
                            Set a new command prefix to replace <div>!</div>.
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!(un)setwelcomemessage</div>
                        </p>
                        <p>
                            Creates/removes a welcome message to post when a new user joins the server.
                        </p>
                    </div>
                    <div>
                        <p>
                            <div>!setwelcomechannel</div>
                        </p>
                        <p>
                            Designates the channel where the command is posted as the welcome channel, which is where the welcome message will be posted
                            when a new user joins.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
