# onChange_GSheets_Read
I saw on a bug report about not being able to read filter view cells accurately that it CAN view them if connected to an onChange event. So, I tried this.

I learned a little bit on how it works.

Firstly, onChange doesn't have a e.range. Only onEdit does. So, I had to use e.source.getActiveCell() to read a single-cell range. 

Secondly, it seems *only* getActiveCell works. Selecting a specified cell in any way (by any sort of address) gives you the wrong cell content. It won't even work if you use getActiveCell and then offset.

The reason I was looking for a workaround in the first place was to pull up thumbnails according to a lookup in a table. Seeing as though the lookup method I was familiar with stopped at the first positive result, the identifier had to be unique. So, I used the column that recorded the ID numbers of the links.

I made the columns into separate arrays with the same start and end point; that way, the indexes all matched the correct row. After finding the index of the proper ID number, I used that value to pull up an image URL in the reference table. From there, I just made a modal dialog that took that grabbed URL and put it within an HTML image tag.

There's probably more effective ways to do this. People may find improvements on what I've done, but I'm happy to come up with the first draft of using this exploit.
