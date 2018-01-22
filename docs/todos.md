### some todos

1. When we navigate to TaskShow, let's have the task's title show in the header. To do this, I think we'd have to:
  1. Change the task_index.js navigateToShow function (lines 25-27) to pass the entire task as params rather than just task.id
  2. We would then have to change task_show_container.js at line 7 so that the task is just equal to ownProps.navigation.state.params.task
  3. Finally, in routers.js, we would add a navigationOptions key to TaskShow similar to the one under TaskIndex. This would pass the navigation prop to a key 'title' which should be equal to navigation.state.params.task.title.

2. Some thoughts on the ongoing Modal v. StackScreen debate:
  * I still prefer the PlusButton in the TaskIndex header. I think it makes the written code simpler. That way createTask can call goBack on success.
    * If we've created a task from PlusButton, it will return to the index.
    * If we've created a task from TaskShow (a subtask), it will return to the parent task's Show page, where the new child task will be listed underneath.
  * Furthermore, if we focus on simplifying the **written code**, we could have the handleSubmit function inside task_form.js (lines 44-60) look like this:
  ```
  handleSubmit() {
    if (this.props.task) {
      this.props.editTask(this.state);
    } else {
      this.props.createTask(this.state);
    }
    this.props.navigation.goBack();
  }
  ```
  * ... and so editTask, too, whether we came there from the button on the Show page OR the onLongPress function from the Index would return us neatly to where we navigated from.
  * While I'm still open to hearing more Modal pro/con discussion, I'm not sure I agree that it makes anything cleaner. I think it gives us a lot more code to write just to achieve, at best, the same visual cues we get from the stackNavigator.

3. Back to the Index's display of children v. parent tasks. Here's a non-exhaustive list of ideas:
  * Color coding (not ideal, I don't think)
  * A div/View border around relatives
  * An obvious hiccup here is, as we discussed earlier, all tasks could have different due dates, and if we were to order them chronologically, which would make sense, we wouldn't necessarily have relatives adjacent to one another
    * One work around could be having the title of each checkbox coded in one of the following ways:
      * ``` title={ `${task.title} > ${task.parent.title}` } ```
      * ``` title={ `${task.title} ... ${task.parent.title}` } ```
    * there could also be a simple icon added to the left of the trash icon denoting that the task is part of something (though that something will be unspecified, so that's also not ideal)
    * both of the above?

4. Closely related to Item 3. I do think there should be some place to view a whole task family tree. I have some thoughts about all that, if we're all interested. I know that finding a clean and simple way to view a tree whose complexity we are consciously choosing to never have control over sounds like a pain, but i think there's maybe a way to do it if we first focus on simplifying the ways we display/navigate TaskShow and TaskForm. These are the basics of what I'm thinking:
  1. Essentially, as I said over slack before, the TaskShow component doesn't provide any functionality that can't be accomplished elsewhere. It shows the task's info, but all functions it provides can be easily and intuitively executed on other screens.
  2. My thought is that we make the TaskShow and TaskForm into the same component. I think we should put the Edit icon (the pencil) as TaskShow's navigationOptions.headerRight key, just like the plusButton is for TaskIndex.
  3. If you will direct your attention to TaskForm line 71. This condition exists because we're using the same form for createTask and editTask. If we extrapolate the effects of that one line into a function that can be activated or toggled onPress of the headerRight Edit icon, we could seamlessly turn the Show page into a Form and vice versa. That would get rid of the problem of us feeling like there are too many different screens everywhere.
  4. So if all of this simplification is agreeable, we would then have to decide how to differentiate between "I would like to view this individual task" and "I would like to view this task family tree". My vote would be onPress v. onLongPress, since we've just dropped the distinction between Show and Form.
  5. Then, there can be a button inside the Show/Form Frankenstein that says something like 'Build Family Tree', which would bring you to the family tree, which could be just a list (rather than an index of checkboxes), each item of which could have a button Add Subtask (and/or maybe even Add Parent). And here we could provide an isolated environment to build projects without adding a bunch more screens. (Any time we add a new Parent or Child, the Form, as I described before, would call goBack (meaning to the family tree page), which would make sense.)
