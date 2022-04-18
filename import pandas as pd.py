import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics

data = pd.read_csv('./data.csv')
data = data.drop(['id'] , axis=1)
x = data.drop(['diagnosis'] , axis=1) #assign the data without results column
y = data['diagnosis'] #save just eh result column

X_train ,  X_test , Y_train , Y_test = train_test_split(x,y,test_size = 0.3 , random_state = 1) # splits the data and returns train and test data 

dt = DecisionTreeClassifier() # initiate a tree 

dt = dt.fit(X_train , Y_train) # train (fit) tree to produce ml model 

Y_predict = dt.predict(X_test) # entering data and predicting the result based on the created model 

accuracy_score = metrics.accuracy_score(Y_test,Y_predict) #  comparing between the resulted data from the model and the results saved earlier 

print(accuracy_score) # print the accuracy


#from sklearn.neighbors import KNeighborsClassifier

