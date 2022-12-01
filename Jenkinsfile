pipeline {
  agent any
    
  tools {nodejs 'NodeJS 8.19.2}
    
  stages {
        
    stage('Git') {
      steps {
	echo 'Cloning git repo...'
        git 'git@github.com:zruthi89/SampleWebApplication.git'
      }
    }
     
    stage('Build') {
      steps {
	 echo 'Build...'
         bat 'npm install'
         bat 'npm start'
      }
    }  
    
            
    stage('Test') {
      steps {
	echo 'Test...'
        bat 'npm test'
      }
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }
  }
}