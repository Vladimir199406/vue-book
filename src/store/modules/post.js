export default {
    state: {
        posts: [],
    },
    getters: {
        allPosts(state) {
            return state.posts;   
        },
        postsCount(state, getters) {
            return getters.validPosts.length;   
        },
        validPosts(state) {
            return state.posts.filter(post => {
                return post.title && post.body;
            });
        },
    },
    actions: {
        async fetchPosts(context, limit = 3) {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
            );
            const posts = await res.json();
            context.commit('updatePosts', posts);
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        }, 
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        }   
    },
    modules: {}
}