/**
 * Created by admin on 10/29/2014.
 */
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'my 1st work',
        isCompleted: true
    },
    {
        id: 2,
        title: 'my 2nd work',
        isCompleted: false
    },
    {
        id: 3,
        title: '3rd work',
        isCompleted: false
    }
];