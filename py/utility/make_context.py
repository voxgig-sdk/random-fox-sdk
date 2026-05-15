# RandomFox SDK utility: make_context

from core.context import RandomFoxContext


def make_context_util(ctxmap, basectx):
    return RandomFoxContext(ctxmap, basectx)
