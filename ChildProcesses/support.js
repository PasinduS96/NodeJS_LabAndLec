console.log("Child Process " + process.argv[2] + " executed." );  

/*

* * process.argv[0] => root directory of the child process (Where node packages ara istalled)
    ex: usr/local/bin/node
* * process.argv[1] => path to working directory which executed file belogs to
    ex:/Projects/Node/Node_TestCodes/ChildProcesses/support.js executed.
* * process.argv[2] => process id of child process

*/