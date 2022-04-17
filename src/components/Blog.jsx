import React from 'react'

function Blog() {
    return (
        <div className='bg-gray-800'>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div class="flex">
                        <div class="pt-1 mr-6 text-center">
                            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
                                <p class="text-sm text-gray-50">Jul</p>
                            </div>
                            <div class="px-2"><p class="text-lg font-bold">18</p></div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <a href="/" class="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category" title="Delevopment">Delevopment</a>
                            </div>
                            <div class="mb-2">
                                <a href="/" aria-label="Article" class="inline-block text-2xl font-bold leading-5 text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400">Why I love Laravel</a>
                            </div>
                            <p class="mb-5 text-gray-50">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                            </p>
                            <div class="flex items-center">
                                <a href="/" aria-label="Author" title="Author" class="mr-3">
                                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                                </a>
                                <div>
                                    <a href="/" aria-label="Author" title="Author" class="font-semibold text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400">Petru Vîrtos</a>
                                    <p class="text-sm font-medium leading-4 text-gray-100">Author</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="pt-1 mr-6 text-center">
                            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
                                <p class="text-sm text-gray-100">May</p>
                            </div>
                            <div class="px-2"><p class="text-lg font-bold">6</p></div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <a href="/" class="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category" title="Food &amp; Snacks">Food &amp; Snacks</a>
                            </div>
                            <div class="mb-2">
                                <a href="/" aria-label="Article" class="inline-block text-2xl font-bold leading-5 text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400">Pizza, you should try it</a>
                            </div>
                            <p class="mb-5 text-gray-50">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                            </p>
                            <div class="flex items-center">
                                <a href="/" aria-label="Author" title="Author" class="mr-3">
                                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                                </a>
                                <div>
                                    <a href="/" aria-label="Author" title="Author" class="font-semibold text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400">Alex Stratulat</a>
                                    <p class="text-sm font-medium leading-4 text-gray-100">Author</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="pt-1 mr-6 text-center">
                            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
                                <p class="text-sm text-gray-100">Feb</p>
                            </div>
                            <div class="px-2"><p class="text-lg font-bold">27</p></div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <a href="/" class="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category" title="Out of this world">Out of this world</a>
                            </div>
                            <div class="mb-2">
                                <a href="/" aria-label="Article" class="inline-block text-2xl font-bold leading-5 text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400">Whatever, just feed me</a>
                            </div>
                            <p class="mb-5 text-gray-50">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                            </p>
                            <div class="flex items-center">
                                <a href="/" aria-label="Author" title="Author" class="mr-3">
                                    <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                                </a>
                                <div>
                                    <a href="/" aria-label="Author" title="Author" class="font-semibold text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400">Susie the Cat</a>
                                    <p class="text-sm font-medium leading-4 text-gray-100">Author</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
