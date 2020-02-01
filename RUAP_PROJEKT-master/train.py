# Convolutional Neural Network with Keras
# Keras biblioteke i paketi:
from keras.models import Sequential
from keras.layers import Conv2D
from keras.layers import MaxPooling2D
from keras.layers import Flatten
from keras.layers import Dense
import numpy as np
from keras.preprocessing import image
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator
# Inicijalizacija konvolucijske neuronske mreže
classifier = Sequential()
#Prvi konvolucijski sloj
#relu: pretvara sve piksele koji imaju negativnu vrijednost u 0
classifier.add(Conv2D(32, (3, 3), input_shape = (64, 64, 3), activation = 'relu'))
#Sloj sažimanja
classifier.add(MaxPooling2D(pool_size = (2, 2)))

#Drugi konvolucijski sloj, ulaz je izlaz prethodnog sloja sažimanja
classifier.add(Conv2D(32, (3, 3), activation = 'relu'))
#Drugi sloj sažimanja
classifier.add(MaxPooling2D(pool_size = (2, 2)))
#Funkcija Flatten služi za prebacivanje 3D podataka u 1D podatke
classifier.add(Flatten())

# Potpuno povezani sloj
classifier.add(Dense(units = 128, activation = 'relu'))
classifier.add(Dense(units = 1, activation = 'sigmoid'))

#kreiranje modela 
classifier.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])
#Predobradba slika da bi se smanjio overfitting
train_datagen = ImageDataGenerator(rescale = 1./255, #All the pixel values would be 0-1
shear_range = 0.2,
zoom_range = 0.2,
horizontal_flip = True)

test_datagen = ImageDataGenerator(rescale = 1./255)

#odabir podataka za trening
training_set = train_datagen.flow_from_directory('data/trening',
target_size = (64, 64),
batch_size = 32,
class_mode = 'binary')
#odabir podataka za validaciju, podaci se razlikuju od podataka za trening
test_set = test_datagen.flow_from_directory('data/validacija',
target_size = (64, 64),
batch_size = 32,
class_mode = 'binary')
#treniranje modela
classifier.fit_generator(training_set,
steps_per_epoch = 20, 
epochs = 5,
validation_data = test_set,
validation_steps = 2000)

#Spremanje modela kao JSON file
classifier_json = classifier.to_json()
with open("model.json", "w") as json_file:
    json_file.write(classifier_json)
#Spremanje modela kao HDF5 file    
classifier.save_weights('models/CNN.h5')
