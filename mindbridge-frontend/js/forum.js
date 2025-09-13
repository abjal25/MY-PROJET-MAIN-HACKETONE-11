document.addEventListener('DOMContentLoaded', async () => {
    const newPostBtn = document.getElementById('new-post-btn');
    const postFormContainer = document.getElementById('post-form-container');
    const newPostForm = document.getElementById('new-post-form');
    const postContent = document.getElementById('post-content');
    const postTags = document.getElementById('post-tags');
    const forumThreads = document.getElementById('forum-threads');

    // Mock forum data
    const mockForumData = [
        {
            id: 1,
            content: "Feeling overwhelmed with academic pressure. Any advice on how to manage stress during exams?",
            author: "Anonymous User",
            date: "2025-09-10",
            tags: ["academics", "stress"],
            replies: [
                { id: 101, content: "You're not alone! Try the 'Mindfulness for Beginners' audio in the resource hub. It helped me a lot.", author: "Anonymous", date: "2025-09-10" },
                { id: 102, content: "I'd suggest breaking down your study schedule into smaller, manageable chunks. Stay hydrated!", author: "Anonymous", date: "2025-09-11" }
            ]
        },
        {
            id: 2,
            content: "Has anyone felt lonely after moving to a new city for college? I find it hard to make new friends.",
            author: "Anonymous User",
            date: "2025-09-09",
            tags: ["relationships", "loneliness"],
            replies: []
        }
    ];

    const renderThreads = () => {
        forumThreads.innerHTML = '';
        mockForumData.forEach(thread => {
            const threadItem = document.createElement('div');
            threadItem.classList.add('thread-item');
            threadItem.innerHTML = `
                <div class="post-meta">
                    <span>Posted by ${thread.author} on ${thread.date}</span>
                    <div class="post-tags">
                        ${thread.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <p class="thread-content">${thread.content}</p>
                <button class="btn btn-secondary flag-btn">Flag for Moderation</button>
                <div class="reply-section">
                    <h4>Replies</h4>
                    ${thread.replies.map(reply => `
                        <div class="reply-item">
                            <p>${reply.content}</p>
                            <span>- ${reply.author} on ${reply.date}</span>
                        </div>
                    `).join('')}
                    <form class="reply-form" data-thread-id="${thread.id}">
                        <textarea placeholder="Write a reply..."></textarea>
                        <button type="submit" class="btn btn-primary">Reply</button>
                    </form>
                </div>
            `;
            forumThreads.appendChild(threadItem);
        });
    };

    newPostBtn.addEventListener('click', () => {
        postFormContainer.classList.toggle('hidden');
    });

    newPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const content = postContent.value.trim();
        const tags = postTags.value.split(',').map(tag => tag.trim());
        if (content) {
            const newPost = {
                id: mockForumData.length + 1,
                content: content,
                author: "Anonymous User",
                date: new Date().toISOString().split('T')[0],
                tags: tags,
                replies: []
            };
            mockForumData.unshift(newPost); // Add to the top
            renderThreads();
            newPostForm.reset();
            postFormContainer.classList.add('hidden');
        }
    });

    forumThreads.addEventListener('submit', (event) => {
        if (event.target.classList.contains('reply-form')) {
            event.preventDefault();
            const threadId = parseInt(event.target.dataset.threadId);
            const replyContent = event.target.querySelector('textarea').value.trim();
            if (replyContent) {
                const thread = mockForumData.find(t => t.id === threadId);
                thread.replies.push({
                    id: Date.now(),
                    content: replyContent,
                    author: "Anonymous",
                    date: new Date().toISOString().split('T')[0]
                });
                renderThreads();
            }
        }
    });

    forumThreads.addEventListener('click', (event) => {
        if (event.target.classList.contains('flag-btn')) {
            alert("Post has been flagged for moderation. Thank you for helping keep this a safe space.");
        }
    });

    renderThreads();
});