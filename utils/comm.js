function onDetails (options) {
    var mid = options.currentTarget.dataset.mid;
    var lid = options.currentTarget.dataset.lid;
    var title = options.currentTarget.dataset.title;
    wx.navigateTo({
        url: '/pages/details/details?mid=' + mid + "&lid=" + lid + "&title=" + title,
    });
}

module.exports = {
    onDetails: onDetails
}  