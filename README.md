# Minor-project-2019
## Working Demo: <a href="https://minorproject.netlify.com/">minorproject.netlify.com</a>
### If you want to visit the working functionalities without signing in, visit from here: 
<strong> Live Interview Practice : <a href="https://minorproject.netlify.com/audio-practice">minorproject.netlify.com/audio-practice</a></strong></br>  
<strong> Essay Writing with Automated scoring and Plagiarism Checker: <a href="https://minorproject.netlify.com/audio-practice">minorproject.netlify.com/audio-practice</a></strong></br>
<hr>
<li><b>Read more about the project here: </b>
  <a href="https://prankshaw.github.io/minor-project-2019/">prankshaw.github.io/minor-project-2019</a></li>
<li><b> Project Wiki: </b>
  <a href="https://github.com/prankshaw/minor-project-2019/wiki">github.com/prankshaw/minor-project-2019/wiki</a></li>
<br>

# About Project
## Models
### 4 models to be completed are:-
<ul><li>Automated scoring</li><li>Audio Cofidence Analysis</li> <li>Speech to Text coversion</li><li>Plagiarism checker</li></ul>

## Model Description

#### Plagiarism Checker

Frequent-itemset analysis, also known as market-basket analysis or affinity analysis, can be used for plagiarism detection.
It works by treating documents as items and sentences in all the documents as baskets. Then, it tries to find documents that appear together in multiple baskets (have same sentences). In the book  Mining of Massive Datasets , it is pointed out that one or two sentences in common among documents is already a good indicator of plagiarism in practice.
Rabink karp and KMP algo can be used for string matching.

#### Automated Scoring

The accuracy is calculated by Quadratic Weighted Kappa(QWK), which measures the agreement between two raters. The model architecture consists of 2 Long Short Term Memory(LSTM) layers with a Dense output layer. The final layer uses the Relu activation function. The QWK is calculated by training model on the dataset using 5-Fold Cross Validation and taking the average for all five folds.

#### Text to speech

Recurrent Neural Network will be used for this model. Existing Web speech API with custom wrapper is employed for better accuracy.

#### Voice sentiment analysis

Audio capturing and recognition using webspeech API will be performed and then Support Vector Machine(SVM) is used along with existing API to perform analysis on recorded audio. 

## Important Links
<li> Automated Scoring- https://automatedscoring.herokuapp.com/  </li>
<li> Landing Page- https://minorproject.netlify.com </li>
  
# Work in Progress :)


