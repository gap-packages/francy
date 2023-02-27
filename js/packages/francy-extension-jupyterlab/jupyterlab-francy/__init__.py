import json
from pathlib import Path

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jupyterlab-francy"
    }]
