import os
from IPython.display import display, Javascript

def get_static_path():
    return os.path.join(os.path.split(__file__)[0], 'static')

def widgetmode():
    with open(os.path.join(get_static_path(), 'widgetmode.js'), 'r') as f:
        display(Javascript(data=f.read()))