import pandas as pd 
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


df = pd.read_csv('./data.csv')
df = df.drop(['id'] , axis=1)
x_df = df.drop(['diagnosis'] , axis=1)
y_df =df['diagnosis']
x_train , x_test , y_train , y_test = train_test_split(x_df,y_df,test_size=0.3 , random_state=1)
##dt classifier
dt = DecisionTreeClassifier()
dt = dt.fit(x_train , y_train)
#knn nearest da
train_score = []
test_score = []
score = 0;
k = range(1,100,2)
knn = KNeighborsClassifier()
knn = knn.fit(x_train , y_train)

for i in k :
    y_predict_train = knn.predict(x_train)
    y_predict_test  = knn.predict(x_test)
    accuracy_score_test = accuracy_score(y_predict_test , y_test)
    accuracy_score_train = accuracy_score(y_predict_train , y_train )
    train_score.append(accuracy_score_train)
    test_score.append(accuracy_score_test)
    score = max(accuracy_score_test , score)
  


##plotting


    
print(test_score)



# y_predict_train = dt.predict(x_train)
# y_predict_test  = dt.predict(x_test)

# accuracy_score_test = accuracy_score(y_predict_test , y_test)
# accuracy_score_train = accuracy_score(y_predict_train , y_train )
# print(accuracy_score_test,accuracy_score_train)


