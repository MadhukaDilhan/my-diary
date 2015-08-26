/**
 * Created by admin on 10/27/2014.
 */
Todos.Router.map(function() {
    this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});