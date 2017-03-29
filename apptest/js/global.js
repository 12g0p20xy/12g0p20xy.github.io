 ;(function ($) {
  	
  	// 可选颜色
  	var colors = ['#96C2F1', '#BBE1F1', '#E3E197', '#F8B3D0', '#FFCC00'];
  	
  	//创建许愿页
  	var createItem = function(text){
  		var color = colors[parseInt(Math.random() * 5, 10)];
  		$('<div class="item"><p>'
  			+ text.msg + '</p><p class="nm">'
  			+ '网友：' + text.name + ' ' + text.gift
  			+'<a href="#">x</a></p></div>').css({ 'background': color }).appendTo(container).drag();
  	};
  	
  	// 定义拖拽函数
      $.fn.drag = function () {
  		
          var $this = $(this);
          var parent = $this.parent();
  		
          var pw = parent.width();
          var ph = parent.height();
          var thisWidth = $this.width() + parseInt($this.css('padding-left'), 10) + parseInt($this.css('padding-right'), 10);
          var thisHeight = $this.height() + parseInt($this.css('padding-top'), 10) + parseInt($this.css('padding-bottom'), 10);

          var x, y, positionX, positionY;
          var isDown = false; 

          var randY = parseInt(Math.random() * (ph - thisHeight), 10);
          var randX = parseInt(Math.random() * (pw - thisWidth), 10);


          parent.css({
              "position": "relative",
              "overflow": "hidden"
          });
  		
          $this.css({
              "cursor": "move",
              "position": "absolute"
          }).css({
              top: randY,
              left: randX
          }).mousedown(function (e) {
              parent.children().css({
                  "zIndex": "0"
              });
              $this.css({
                  "zIndex": "1"
              });
              isDown = true;
              x = e.pageX;
              y = e.pageY;
              positionX = $this.position().left;
              positionY = $this.position().top;
              return false;
          });
  		
  		
          $(document).mouseup(function (e) {
              isDown = false;
          }).mousemove(function (e) {
              var xPage = e.pageX;
              var moveX = positionX + xPage - x;

              var yPage = e.pageY;
              var moveY = positionY + yPage - y;

              if (isDown == true) {
                  $this.css({
                      "left": moveX,
                      "top": moveY
                  });
              } else {
                  return;
              }
              if (moveX < 0) {
                  $this.css({
                      "left": "0"
                  });
              }
              if (moveX > (pw - thisWidth)) {
                  $this.css({
                      "left": pw - thisWidth
                  });
              }
              if (moveY < 0) {
                  $this.css({
                      "top": "0"
                  });
              }
              if (moveY > (ph - thisHeight)) {
                  $this.css({
                      "top": ph - thisHeight
                  });
              }
          });
      };
  	
  	// 初始化
  	var init = function () {
  		
  		var container = $('#container');
  		
  		// 绑定关闭事件
  		container.on('click','a',function (e) {
        e.preventDefault();
  			$(this).parents('.item').remove();
  		}).height($(window).height() -204);

      // GET
      $.get("msg.json", function(data, status) {
        $.each(data, function (i,v) {
          createItem(v);
        });
      });

      // POST表单
      $('#msgForm').submit(function(event) {
        event.preventDefault();

        // 表单转换成JSON字符串
        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            }); 
            return o;
        };

        var msgData = JSON.stringify($(this).serializeObject());
        console.log(msgData);
        console.log(typeof msgData);

        $.ajax({
          url: $(this).attr('action'),
          type: $(this).attr('method'),
          data: msgData,
          success: function(textStatus) {
            
          },
          error: function(textStatus) {
            
          }
        });

        
        // 页面插入一个便签
        if(msgData) {
          var oData = $.parseJSON(msgData); // 转换成JSON对象
              createItem(oData);
          $(this).find('input, textarea').not(':radio').val('');
        }   
        
      });
  		
  	};
  	
  	$(function() {
  		init();
  	});
  	
  })(jQuery);