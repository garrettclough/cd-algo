class SLL {
    display () {
        var listString = "";
        if (this.head == null) {
            return listString;
        }
        listString += this.head.next;
        var runnner = this.head.next;
        while (runner != null) {
            listString += ", " + runner.value;
            runner = runner.next;
        }
        return listString;
    }
}