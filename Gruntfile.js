var fs = require('fs');

module.exports = function(grunt) {
    
    

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        
        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: discoverFilesToCompile(__dirname + "/views")
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['images/*'], dest: 'build/'},
                    {src: ['css/*'], dest: 'build/'},
                    {src: ['js/*', 'js/*/*'], dest: 'build/'},
                ]
            }
        },
        clean: [
            'build/'
        ]
        
        
        
        
    });
    
    
    
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('build', ['clean','jade','copy']);
}






var discoverFilesToCompile = function discoverFilesToCompile(directory, returnObj) {
    
    //made to be called recursively - but have no need for this for this site
    if(!returnObj) returnObj = {};
    
    var listOfFiles = fs.readdirSync(directory);
    
    var inputDir = "views/";
    var outputDir = "build/";
    
    for(var i=0; i<listOfFiles.length; i++)
    {
        var file = listOfFiles[i];
        
        if(file != "base.jade") {
            var outputFile = outputDir + file.replace(".jade", ".html");
            var inputFile = inputDir + file;
            returnObj[outputFile] = inputFile;
        }
        
    }
    
    console.log(returnObj);
    
    return returnObj;
    
    
    
    
};