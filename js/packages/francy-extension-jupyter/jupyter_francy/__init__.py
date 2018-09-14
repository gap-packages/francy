from IPython.display import display, JSON
import json

# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'nbextension',
        'dest': 'jupyter_francy',
        'require': 'jupyter_francy/extension'
    }]

# A display class that can be used within a notebook. 
#   from jupyter_francy import application/vnd.francy+json
#   application/vnd.francy+json(data)
    
class francy(JSON):
    """A display class for displaying application/vnd.francy+json visualizations in the Jupyter Notebook and IPython kernel.
    
    application/vnd.francy+json expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    def _ipython_display_(self):
        bundle = {
            'application/vnd.francy+json': self.data,
            'text/plain': '<jupyter_francy.application/vnd.francy+json object>'
        }
        metadata = {
            'application/vnd.francy+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
