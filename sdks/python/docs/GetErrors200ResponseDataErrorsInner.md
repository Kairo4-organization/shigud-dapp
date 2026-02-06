# GetErrors200ResponseDataErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**http_status** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**retryable** | **bool** |  | [optional] 

## Example

```python
from sipher_client.models.get_errors200_response_data_errors_inner import GetErrors200ResponseDataErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetErrors200ResponseDataErrorsInner from a JSON string
get_errors200_response_data_errors_inner_instance = GetErrors200ResponseDataErrorsInner.from_json(json)
# print the JSON string representation of the object
print(GetErrors200ResponseDataErrorsInner.to_json())

# convert the object into a dict
get_errors200_response_data_errors_inner_dict = get_errors200_response_data_errors_inner_instance.to_dict()
# create an instance of GetErrors200ResponseDataErrorsInner from a dict
get_errors200_response_data_errors_inner_from_dict = GetErrors200ResponseDataErrorsInner.from_dict(get_errors200_response_data_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


