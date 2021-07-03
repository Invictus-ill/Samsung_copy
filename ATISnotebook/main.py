import pickle
import os
import numpy as np 
import pandas as pd

DATA_DIR=""

def load_ds(fname='atis.train.pkl'):
    with open(fname, 'rb') as stream:
        ds,dicts = pickle.load(stream)
    print('Done  loading: ', fname)
    print('      samples: {:4d}'.format(len(ds['query'])))
    print('   vocab_size: {:4d}'.format(len(dicts['token_ids'])))
    print('   slot count: {:4d}'.format(len(dicts['slot_ids'])))
    print(' intent count: {:4d}'.format(len(dicts['intent_ids'])))
    return ds,dicts

train_ds, dicts = load_ds(os.path.join(DATA_DIR,'atis.train.pkl'))
test_ds, dicts  = load_ds(os.path.join(DATA_DIR,'atis.test.pkl'))


t2i, s2i, in2i = map(dicts.get, ['token_ids', 'slot_ids','intent_ids'])
i2t, i2s, i2in = map(lambda d: {d[k]:k for k in d.keys()}, [t2i,s2i,in2i])
query, slots, intent =  map(train_ds.get, ['query', 'slot_labels', 'intent_labels'])


for i in range(5000):
    json_intent = ...
    pass