# Importing the Keras libraries and packages
from keras.models import Sequential
from keras.layers import Conv2D
from keras.layers import MaxPooling2D
from keras.layers import Flatten
from keras.layers import Dense
import numpy as np
from keras.preprocessing import image
#kreiranje modela i slojeva za učitavanje gotovog modela
model = Sequential()
model.add(Conv2D(32, (3, 3), input_shape = (64, 64, 3), activation = 'relu'))
model.add(MaxPooling2D(pool_size = (2, 2)))

model.add(Conv2D(32, (3, 3), activation = 'relu'))
model.add(MaxPooling2D(pool_size = (2, 2)))
model.add(Flatten())

model.add(Dense(units = 128, activation = 'relu'))
model.add(Dense(units = 1, activation = 'sigmoid'))

#učitavanje treniranog modela
model.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])
model.load_weights('C:\\Users\\Ivana\\Desktop\\TheProject\\TheProject\\models\\CNN.h5')
#učitavanje slike za testuranje
test_image = image.load_img('C:\\Users\\Ivana\\Desktop\\TheProject\\TheProject\\picture.jpg', target_size = (64, 64))
test_image = image.img_to_array(test_image)
test_image = np.expand_dims(test_image, axis = 0)
result = model.predict(test_image)

#prikaz rezultata
if result[0][0] == 1:
    prediction = 'house'
else: prediction = 'church'
print(prediction)