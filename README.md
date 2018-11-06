
> a project pack for localStorage

## Build Setup

``` bash
# install dependencies
npm install better-storage -S

import storage from 'better-storage'

# set localStorage item which will never expires

storage.set('num',1)

# set localStorage item which will be expires in some time, unit of third param is minute,
# for example,expires in 2 minutes will be set like under:

storage.set('num',1,2)


# get localStorage item
storage.get('num')

# remove localStorage item
storage.remove('num')


```

