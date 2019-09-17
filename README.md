# Minor-project-2019
<li><b>Read more about the project here: </b>
  https://prankshaw.github.io/minor-project-2019/</li>
<li><b> Project Wiki: </b>
  https://github.com/prankshaw/minor-project-2019/wiki</li>
  
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

Recurrent Neural Network will be used for this model. Existing API can also be employed for better accuracy.

#### Voice sentiment analysis

Research to be done!!

## Important Links
<li> Automated Scoring- https://automatedscoring.herokuapp.com/  </li>
<li> Landing Page- https://minorproject.netlify.com </li>
  
# Work in Progress :)
