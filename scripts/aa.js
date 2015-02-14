module.exports = function(robot) {
    // Listening for the key phrase to trigger callback.
    robot.respond(/how are you\s?\?/i, function(msg){

        // Creating child process: http://nodejs.org/api/child_process.html
        var exec = require('child_process').exec,
            child;

        // -n 1 - in order to grab the state and exit
        // -b   - Batch mode. Useful for sending output from top to other programs 
        //        or to a file. In this mode, top will not accept command line input. 
        //        Output is plain text suitable for display on a dumb terminal.
        child = exec('top -b -n 1',
            function (error, stdout, stderr) {
                msg.send("In general, I'm fine and ready to kill all humans.\n\n" + 
                    stdout);
                msg.send(stderr);
                if (error !== null) {
                    msg.send('exec error: ' + error);
                }
            });
    });
}