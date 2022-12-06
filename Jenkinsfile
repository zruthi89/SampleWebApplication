pipeline {
  agent any
        
  stages {
        
    stage('Build') {
      steps {
	 echo 'Build...'
         bat 'npm install'
         bat 'npm run build'
      }
    }  
           
    stage('Test') {
      steps {
	echo 'Test...'
	bat 'npm install -g jest'
	bat 'npm run test a'
      }
      post {
           success {
		script {
		  bat "exit 0"
		}
           }
           failure {
                script{
                   bat "exit 0"
                    }
                }
	}
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }

    post{
        always{
            emailext to: "zruthimurali@gmail.com",
            subject: "jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME}",
            body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}"
        }
    }
  }
}