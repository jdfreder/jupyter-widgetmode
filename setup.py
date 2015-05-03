# -*- coding: utf-8 -*-
from setuptools import setup
try:
    from ipythonpip import cmdclass
except:
    import pip, importlib
    pip.main(['install', 'jupyter-pip']); cmdclass = importlib.import_module('jupyterpip').cmdclass

setup(
    name='widgetmode',
    version='0.1',
    description='A toolbar shortcut for the IPython notebook toolbar that allows you to hide everything but the widgets and output.',
    author='Jonathan Frederic',
    author_email='jon.freder@gmail.com',
    license='MIT License',
    url='https://github.com/jdfreder/ipython-widgetmode',
    keywords='data visualization interactive interaction python ipython widgets widget',
    classifiers=['Development Status :: 4 - Beta',
                 'Programming Language :: Python :: 2.7',
                 'License :: OSI Approved :: MIT License'],
    install_requires=['jupyter-pip'],
    cmdclass=cmdclass('widgetmode', 'widgetmode/init'),
)
