import React from 'react'
import Preloader from './loader/Preloader'

const Loader = ({ isLoading, render }) => isLoading ? <Preloader /> : render();

export default Loader;
