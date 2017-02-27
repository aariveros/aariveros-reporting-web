reporting.ProjectView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());

        var projectId = this.model.attributes.projectId;

        // $('#hierarchy').append('<li><a href="#projects/' + projectId + '">Project</a></li>');
        
        $('#summary', this.el).html(new reporting.ProjectSummaryView({model:this.model}).render().el);

        /*this.model.reports.fetch({
            success:function (data) {
                if (data.length == 0)
                    $('.no-reports').show();
            }
        });
        $('#reports', this.el).append(new reporting.EmployeeListView({model:this.model.reports}).render().el);*/
        return this;
    }
});