module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    "build/index.html": "views/index.jade"
                }
            }
        }
        
        
        
        
    });
    
    
    
    grunt.loadNpmTasks('grunt-contrib-jade');
    
    grunt.registerTask('build', ['jade']);
}