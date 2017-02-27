reporting.HomeView = Backbone.View.extend({

    initialize: function () {
        var enterprise = new reporting.EnterpriseCollection();
        enterprise.fetch();
        this.enterpriseListView = new reporting.EnterpriseListView({model:enterprise});
    },

    events:{
        "click #showMeBtn":"showMeBtnClick"
    },

    render:function () {
        this.$el.html(this.template());

        $('#hierarchy').html('<li><a href="#">Home</a></li>');

        $('.hero-unit', this.el).append(this.enterpriseListView.render().el);
        return this;
    },

    showMeBtnClick:function () {
        console.log("showme");
        reporting.shellView.search();
    }

});