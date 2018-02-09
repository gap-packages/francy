from IPython.display import display, JSON
import json

# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'francy',
        'require': 'francy/extension'
    }]

# A display class that can be used within a notebook. 
#   from francy import francy
#   francy(data)
    
class francy(JSON):
    """A display class for displaying francy visualizations in the Jupyter Notebook and IPython kernel.
    
    francy expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    def _ipython_display_(self):
        bundle = {
            'application/vnd.francy+json': self.data,
            'text/plain': '<francy.francy object>'
        }
        metadata = {
            'application/vnd.francy+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
