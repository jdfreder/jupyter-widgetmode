# -*- coding: utf-8 -*-

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

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
    packages=['widgetmode'],
    package_data={'': ['*.js',
                       'static/*.js']}
)
