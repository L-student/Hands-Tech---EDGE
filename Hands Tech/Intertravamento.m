function [u] = Intertravamento(u, t1, t2)
if(u >= 4)
    u = 4;
else 
    if(u <= -4)
        u = -4;
    end        
    
end
if(t1 > 28 && u > 3);
   u = 3;    
end
if(t2 > 28 && u > 3);
   u = 3; 
end
if(t1 < 2 && u < 0);
    u = 0;
end
end